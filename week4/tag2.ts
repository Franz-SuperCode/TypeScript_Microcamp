type Product ={
    name:string;
    productId: number;
    imageId?: number
}

type Image ={
    imageUrl:string;
    imageData: string;
    altText: string
}

interface Products {
    [productId: number]: Product;
  }
  
  interface Images {
    [imageId: number]: Image;
  }

type ProductImage = Products & Image;



interface Orders {
    ProductID: number;
    Ordernumber: number;
    Amound: number;
  }

  interface Paypal{
    email: string;
  }

  interface CreditCard{
    ccn: number;
  }


type CreditCardOrder = Orders & CreditCard;
type PayPalOrder = Orders & Paypal;

  
  const images: Images = {
    1: {
      imageUrl: "https://testImages.com/book",
      imageData: "This is a Book",
      altText: "Sorry could not load this book",
    },
    2: {
      imageUrl: "https://testImages.com/cd",
      imageData: "This is a CD",
      altText: "Sorry could not load this cd",
    },
    4: {
      imageUrl: "https://testImages.com/calculator",
      imageData: "This is a Calculator",
      altText: "Sorry could not laod this Calculator",
    },
  };
  
  const products: Products = {
    10: {
      name: "book",
      productId: 10,
      imageId: 1,
    },
    11: {
      name: "cd",
      productId: 11,
      imageId: 2,
    },
    12: {
      name: "laptop",
      productId: 12,
    },
    13: {
      name: "calculator",
      productId: 13,
      imageId: 4,
    },
  };


//In dieser Funktion iterieren wir über das Array von IDs und greifen auf das Objekt "products" zu, um das entsprechende Produkt abzurufen.

/* Wenn das Produkt ein Bild hat, überprüfen wir zunächst, ob die entsprechende "imageId" definiert ist und ob es tatsächlich ein Objekt in der "images"-Datenbank gibt. Wenn beides zutrifft, fügen wir das Bild zum Produkt hinzu und erstellen ein neues Objekt vom Typ ProductImage, welches eine Type-Intersection aus Product und Image ist.

Ansonsten geben wir einfach das Produkt zurück. */

function generateProducts(ids: number[]): (Product | ProductImage)[] {
    const productsList = ids.map((id) => {
      const product = products[id];
      if (product.imageId !== undefined && images[product.imageId] !== undefined) {
        const { imageUrl, imageData, altText } = images[product.imageId];
        const productImage = { ...product, imageUrl, imageData, altText };
        return productImage;
      }
      return product;
    });
  
    console.log(productsList);
  
    return productsList;
  }
  
  generateProducts([10, 13]); // Aufruf der Funktion mit den Produkt-IDs 10 und 13




  function processCreditCardOrder(order: CreditCardOrder): void {
    console.log("Contacting Credit Card Company for Order ", order);
  }
  
  function processPaypalOrder(order: PayPalOrder): void {
    console.log("Contacting PayPal for Order ", order);
  }
  
  function isCreditCardOrder(order: CreditCardOrder | PayPalOrder): order is CreditCardOrder {
   return "ccn" in (order as CreditCardOrder);
  };

function newOrder(order: CreditCardOrder | PayPalOrder){
    console.log(order);
}

let kevinsOrder = {
    ProductID: 10,
    Ordernumber: 1,
    Amound: 100,
    ccn: 15684646
}

let franzOrder = {
    ProductID: 10,
    Ordernumber: 1,
    Amound: 100,
    email: "test@gmx.de"
}

newOrder(kevinsOrder);
newOrder(franzOrder);

  /*   interface Orders {
    ProductID: number;
    Ordernumber: number;
    Amound: number;
  }

  interface CreditCard{
    ccn: number;
  } */




export{}