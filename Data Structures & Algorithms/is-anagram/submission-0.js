class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const mapS = new Map();
        const mapT = new Map();

        for (const char of s) {
            mapS.set(char, (mapS.get(char) || 0) + 1);
        }

        for (const char of t) {
            mapT.set(char, (mapT.get(char) || 0) + 1);
        }

        for (const [char, count] of mapS) {
            if (mapT.get(char) !== count) {
                return false;
            }
        }

        return true;
    }
}
