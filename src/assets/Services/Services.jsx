import Shoe from "../Shoe/Shoe";


const Services = () => {
    const shoes = [
        {
          id: 1,
          image: "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
          title: "Running Shoe",
          description: "A comfortable and durable running shoe for all your fitness needs.",
          btnText: "Buy Now",
        },
        {
          id: 2,
          image: "https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.webp?b=1&s=170667a&w=0&k=20&c=GXD8Ci32Wa8c8Zc49domJFzqpCTaHgxe96_qfM7ml8w=",
          title: "Casual Sneaker",
          description: "A stylish and versatile sneaker that goes well with any casual outfit.",
          btnText: "Shop Now",
        },
        {
          id: 3,
          image: "https://media.istockphoto.com/id/1386861680/photo/old-and-new-canvas-tennis-shoes.webp?b=1&s=170667a&w=0&k=20&c=eaJPy76koxCGvN_9jO07Geo7qmR4r9lMBe3UZmXiB6U=",
          title: "Hiking Boot",
          description: "A rugged and waterproof hiking boot designed for outdoor adventures.",
          btnText: "Add to Cart",
        },
      ];
      
    return (
      <div className="flex-grow pt-5">
          <div className="grid grid-cols-3 gap-10">
            {
                shoes.map(shoe=><Shoe key={shoe.id} shoe={shoe}></Shoe>)
            }
      </div>
      </div>
    );
};

export default Services;