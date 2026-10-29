class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            if (map.has(num)) {
                map.set(num, (map.get(num) || 0) + 1);
            } else {
                map.set(num, 1);
            }
        }

        const arr = [...map.entries()].sort((a, b) => b[1] - a[1]);
        return arr.slice(0, k).map(([num, frequency]) => num);

    }
}
