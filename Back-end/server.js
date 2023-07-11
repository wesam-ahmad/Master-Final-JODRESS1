const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const authorization = require("./middleware/authorization");
const authentication = require ("./routes/jwtAuth");
const cors = require("cors");
const pool = require("./db");
const port = 8000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(authentication);

 //
 const { getItem } = require("./utils/jwtGenerator");
//get the user data from database
app.get('/get-user-data', async (req, res) => {
  
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user_id = getItem(token).user_id;
    try {

  
      const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
  
      if (user.rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const userData = user.rows[0];
  
      res.json(userData);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

pool.connect().then(() => {
    app.listen(port, () => {
      console.log("Server working on port " + port);
    });
  });

app.put("/UpdateUser", async (req, res) => {
  // const { getItem } = require("./utils/jwtGenerator");
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const user_id = getItem(token).user_id;
 
    try {
       const { user_name,user_email,user_phone,user_address } = req.body;
       // Update the user profile in the database
       const updatedUser = await pool.query(
         "UPDATE users SET user_name = $1, user_email = $2, user_phone = $3 , user_address = $4 WHERE user_id = $5 RETURNING *",
         [user_name,user_email,user_phone,user_address, user_id]
       );
  
       res.json(updatedUser.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  app.put("/UpdateUser", async (req, res) => {
    // const { getItem } = require("./utils/jwtGenerator");
    

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user_id = getItem(token).user_id;
   
    
      try {
         const { new_password } = req.body;
         const saltRounds = 10;
         const salt = await bcrypt.genSalt(saltRounds);
         const hashedPassword = await bcrypt.hash(new_password, salt);
         // Update the user profile in the database
         const updatedUser = await pool.query(
           "UPDATE users SET user_password = $1 WHERE user_id = $2 RETURNING *",
           [hashedPassword, user_id]
         );
    
         res.json(updatedUser.rows[0]);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });
  
    app.put("/UpdatePass", async (req, res) => {
      // const { getItem } = require("./utils/jwtGenerator");
      
  
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      const user_id = getItem(token).user_id;
     
      
        try {
           const { current_password,new_password } = req.body;
          //  const saltRounds = 10;
          //  const salt = await bcrypt.genSalt(saltRounds);
          //  const hashedPassword = await bcrypt.hash(new_password, salt);
           // check if password is matches with current ?
          //  const CheckPass = await pool.query(
          //   "SELECT count(*) FROM users WHERE user_id = $1 AND user_password = $2 RETURNING *",
          //   [user_id,hashedPassword]
          // );
          res.json(hashedPassword);
           // Update the user profile in the database
          //  const updatedUser = await pool.query(
          //    "UPDATE users SET user_password = $1 WHERE user_id = $2 RETURNING *",
          //    [hashedPassword, user_id]
          //  );
      
          // res.json(updatedUser.rows[0]);
        } catch (err) {
          console.error(err.message);
          res.status(500).send("Server Error");
        }
      });
    
  app.post("/message", async (req, res) => {
    try {
        const { name, email,subject, message } = req.body;
      

        const Message =  await pool.query(
          "INSERT INTO massage (name, email,subject,massage ) VALUES ($1, $2, $3,$4) RETURNING *",
          [name, email,subject,message ]
        );

        res.json(Message);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.post("/addProduct", upload.array("image", 1), (req, res) => {
  const files = req.files;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const userId = getItem(token).user_id;
  if (!files || files.length === 0) {
    return res.status(400).send("No images provided");
  }

  const image = files.map((file) => file.buffer);
  const { name, description,price, size, color ,cat_id} = req.body;



  // Insert data into the database
  const query =
    "INSERT INTO products (name,description, price, size, color, cat_id ,provider_id,image) VALUES ($1, $2, $3, $4, $5, $6, $7 ,$8) RETURNING *;";
  const values = [
    name,
    description,
    price,
    size,
    color,
    cat_id,
    userId,
    image
  ];

  pool
    .query(query, values)
    .then((result) => {
      const inserteddress = result.rows[0];
      console.log("Data sent");
      res.send(inserteddress); 
    })
    .catch((error) => {
      console.error("Error inserting data:", error);
      res.status(500).send("Error inserting data");
    });
});


//get the user data from database
app.get('/get-nav-arrival', async (req, res) => {
  try {


    const select = await pool.query('SELECT * FROM products where deleted =false and is_approved=true order by id desc limit 8');

    if (select.rows.length === 0) {
      return res.status(404).json({ message: 'data not found' });
    }

    const data = select.rows.map((products) => {
      const base64ImageDatas = products.image.map((image) =>
        Buffer.from(image).toString("base64")
      );
      return { ...products, image: base64ImageDatas };
    });



    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
app.get('/get-nav-Featured', async (req, res) => {
  try {


    const select = await pool.query('SELECT * FROM products where deleted =false and is_approved=true and is_featured = true order by id desc limit 8');

    if (select.rows.length === 0) {
      return res.status(404).json({ message: 'data not found' });
    }

    const data = select.rows.map((products) => {
      const base64ImageDatas = products.image.map((image) =>
        Buffer.from(image).toString("base64")
      );
      return { ...products, image: base64ImageDatas };
    });

    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.get('/products/:id', async (req, res) => {
  try {

    const productId = parseInt(req.params.id);
    const values = [productId];
    const select = await pool.query('SELECT products.*,users.user_name FROM products join users on products.provider_id = users.user_id where products.id =$1',values);

    if (select.rows.length === 0) {
      return res.status(404).json({ message: 'data not found' });
    }

    const data = select.rows.map((products) => {
      const base64ImageDatas = products.image.map((image) =>
        Buffer.from(image).toString("base64")
      );
      return { ...products, image: base64ImageDatas };
    });

    res.json(data[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

 
});


app.get('/get-related/:id', async (req, res) => {
  try {

    const productId = parseInt(req.params.id);
    const values = [productId];
    const select = await pool.query('SELECT products.*,users.user_name FROM products join users on products.provider_id = users.user_id where products.cat_id =$1',values);

    if (select.rows.length === 0) {
      return res.status(404).json({ message: 'data not found' });
    }

    const data = select.rows.map((products) => {
      const base64ImageDatas = products.image.map((image) =>
        Buffer.from(image).toString("base64")
      );
      return { ...products, image: base64ImageDatas };
    });

    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

 
});


//get the user data from database
app.get('/get-cat', async (req, res) => {
  try {


    const select = await pool.query('SELECT * from categories');

    if (select.rows.length === 0) {
      return res.status(404).json({ message: 'data not found' });
    }
    const data = select.rows;
    // const data = select.rows.map((categories) => {
    //   const base64ImageDatas = categories.image.map((image) =>
    //   image?Buffer.from(image).toString("base64"):''
    //   );
    //   return { ...categories, image: base64ImageDatas };
    //});



    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});