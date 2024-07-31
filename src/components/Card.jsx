export default function Card({title, description, image}) {
    return(
        <div className="flex w-full h-full">


        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-lg">
         {description}
          </p>
        </div>


        <div className="flex-1 p-4">
          <img src={image} alt="About Us" className="w-full h-auto object-cover" />
        </div>
      </div>

    );
}