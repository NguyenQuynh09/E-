export const singleFilter=[
    {id: "price",
    name: "Price",
    options: [
        { value: "250,000 VND-300,000 VND", label: "250,000 VND-300,000 VND"},
        {value: "250,000 VND-300,000 VND", label: "250,000 VND-300,000 VND"},
        {value: "250,000 VND-300,000 VND", label: "250,000 VND-300,000 VND"},

    ],
},

{   
    id: "discount",
    name: "Discount Range",
    options: [
        { value: "10", 
        label: "10% And Above"},
        {value: "20", label: "20% And Above"},
        {value: "30", label: "30% And Above"},
        {value: "40", label: "40% And Above"},
        {value: "50", label: "50% And Above"},
        {value: "60", label: "60% And Above"},
        {value: "70", label: "70% And Above"},

    ],
},

{id: "stock",
    name: "Availability",
    options: [
        { value: "in_stock", 
        label: "In stock"},
        {value: "out_of_stock", label: "Out Of Stock"},

    ],
},
]

export const sortOptions = [
{ name: "Price: Low to High", query: "Price_low", current: false },
{ name: "Price: High to Low", query: "Price_high", current: false },
]