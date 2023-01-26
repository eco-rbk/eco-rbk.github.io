db.createCollection("items")
db.items.insertMany([{
"_id": 1,
"item_category": "Bag"
},
{
"_id": 2,
"item_category":"Mobile Phones"
},
{
"_id":3,
"item_category":"Laptop"}])
db.inventory.insertMany([{
    "_id": 101,
    "Brand": "Samsung",
    "Model": "Note 10",
    "item_id": 2
    },{
    "_id": 102,
    "Brand": "Hawk Bag",
    "Model": "HK2",
    "item_id": 1
    },
{
    "_id": 103,
    "Brand": "Asus",
    "Model": "Vivobook s15",
    "item_id": 3

}]
    )
    db.items.aggregate([
        {
        $lookup:
        {
        from: "inventory",
        localField: "_id",
        foreignField:"item_id",
        as: "stocks"
        }},
        {
        $match:{
        "_id": 1}}
        ]).pretty()