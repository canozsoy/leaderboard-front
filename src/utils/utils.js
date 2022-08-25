export default function itemExtractor(item) {
    return [item.country, item.name, item.rank + 1, item.score, item.rank - item.oldRank]
}