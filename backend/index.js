const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const fruits = [
  { name: 'Apple', description: 'A sweet, edible fruit produced by an apple tree.' },
  { name: 'Banana', description: 'An elongated, edible fruit produced by several kinds of large herbaceous flowering plants.' },
  { name: 'Mango', description: 'A tropical stone fruit known for its juicy and sweet flesh.' },
  { name: 'Pineapple', description: 'A large tropical fruit with a spiky, tough skin and sweet, tangy flesh.' },
  { name: 'Strawberry', description: 'A widely grown hybrid species known for its bright red color, juicy texture, and sweet flavor.' },
  { name: 'Blueberry', description: 'A small, sweet, blue-black fruit rich in antioxidants and vitamins.' },
  { name: 'Grapes', description: 'A small, juicy fruit that grows in clusters on vines, used fresh, dried as raisins, or in winemaking.' },
  { name: 'Orange', description: 'A citrus fruit known for its sweet-tart flavor and high vitamin C content.' },
  { name: 'Kiwi', description: 'A small, brown, fuzzy fruit with bright green flesh and tiny black seeds, known for its unique, tangy taste.' },
  { name: 'Watermelon', description: 'A large, juicy fruit with a thick green rind and sweet red flesh, perfect for hot summer days.' },
  { name: 'Peach', description: 'A soft, juicy fruit with fuzzy skin and a sweet, fragrant flavor, often used in desserts and preserves.' },
  { name: 'Pear', description: 'A sweet, bell-shaped fruit with a smooth skin and juicy flesh, enjoyed fresh or in culinary dishes.' },
  { name: 'Pomegranate', description: 'A fruit with a tough outer layer and hundreds of edible seeds inside, known for its tart flavor and antioxidant properties.' },
  { name: 'Papaya', description: 'A tropical fruit with sweet, orange flesh and black seeds, often eaten fresh or used in smoothies and salads.' },
  { name: 'Blackberry', description: 'A small, dark purple fruit with a sweet and slightly tart flavor, rich in vitamins and antioxidants.' },
  { name: 'Cherry', description: 'A small, round stone fruit that can be sweet or tart, commonly used in baking and as a fresh snack.' },
  { name: 'Apricot', description: 'A small, orange fruit with a soft, velvety skin and sweet, juicy flesh, often dried or used in jams.' },
  { name: 'Plum', description: 'A stone fruit with a smooth skin and sweet flesh, available in many varieties and colors.' },
  { name: 'Raspberry', description: 'A small, red or black fruit with a sweet-tart flavor, often used in desserts, jams, and fresh snacks.' },
  { name: 'Lemon', description: 'A citrus fruit with a bright yellow skin and sour, tangy juice, commonly used in cooking, baking, and beverages.' }
];

const vegetables = [
  { name: 'Carrot', description: 'A root vegetable, usually orange in color.' },
  { name: 'Spinach', description: 'A leafy green flowering plant native to central and western Asia.' },
  { name: 'Broccoli', description: 'An edible green plant in the cabbage family whose large flowering head is eaten as a vegetable.' },
  { name: 'Potato', description: 'A starchy tuber of the plant Solanum tuberosum, a staple food in many parts of the world.' },
  { name: 'Tomato', description: 'A red, edible fruit from the plant Solanum lycopersicum, used as a vegetable in cooking.' },
  { name: 'Cucumber', description: 'A long, green vegetable that is often eaten raw in salads or pickled, low in calories and high in water content.' },
  { name: 'Bell Pepper', description: 'A cultivar group of the species Capsicum annuum, also known as sweet peppers, available in various colors.' },
  { name: 'Lettuce', description: 'A leafy green vegetable commonly used in salads and sandwiches, known for its crisp texture.' },
  { name: 'Zucchini', description: 'A summer squash with a mild flavor, often used in cooking and baking.' },
  { name: 'Eggplant', description: 'A glossy, purple vegetable with a slightly bitter taste, used in various cuisines around the world.' },
  { name: 'Cauliflower', description: 'A cruciferous vegetable with a firm, white head, often used as a low-carb substitute in various dishes.' },
  { name: 'Green Beans', description: 'A long, slender green vegetable that is often steamed, stir-fried, or used in casseroles.' },
  { name: 'Asparagus', description: 'A spear-like green vegetable with a delicate flavor, often steamed or grilled.' },
  { name: 'Peas', description: 'Small, round green vegetables that are sweet and tender, often used in soups and side dishes.' },
  { name: 'Pumpkin', description: 'A large, round vegetable with orange flesh, commonly used in pies, soups, and decorations.' },
  { name: 'Sweet Potato', description: 'A starchy root vegetable with a sweet flavor, commonly baked, mashed, or fried.' },
  { name: 'Radish', description: 'A small, crunchy root vegetable with a peppery flavor, often used in salads and as a garnish.' },
  { name: 'Beetroot', description: 'A root vegetable known for its deep red color and earthy flavor, often used in salads, soups, and as a natural dye.' },
  { name: 'Kale', description: 'A leafy green vegetable known for its high nutritional value, often used in salads, smoothies, and as a cooked green.' },
  { name: 'Brussels Sprouts', description: 'A cruciferous vegetable resembling small cabbages, known for its unique, slightly bitter flavor.' }
];

app.get('/api/fruitsName', (req, res) => {
  res.json(fruits);
});

app.get('/api/vegetablesName', (req, res) => {
  res.json(vegetables);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
