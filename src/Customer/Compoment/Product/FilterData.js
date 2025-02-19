export const singleFilter=[
    {id: "price",
    name: "Price",
    options: [
        { value: "250000-300000", Label: "250000 to 300000"},
        {value: "250000-300000", Label: "250000 to 300000"},
        {value: "250000-300000", Label: "250000 to 300000"},

    ],
},

{id: "discount",
    name: "Discount Range",
    options: [
        { value: "10", 
        Label: "10% And Above"},
        {value: "20", Label: "20% And Above"},
        {value: "30", Label: "30% And Above"},

    ],
},

{id: "stock",
    name: "Availability",
    options: [
        { value: "in_stock", 
        Label: "In stock"},
        {value: "out_of_stock", Label: "Out Of Stock"},

    ],
},
]

export const sortOptions = [
{ name: "Price: Low to High", query: "Price_low", current: false },
{ name: "Price: High to Low", query: "Price_high", current: false },
]

