export default function Card2({title, description, image}) {
    return(
        <div className="flex w-full h-full flex-wrap">
       
        <div className="flex-1 p-4 min-w-72">
          <img src={image} alt="About Us" className="w-full h-auto object-cover" />
        </div>

        <div className="flex-1 p-4 min-w-72">
          <h2 className="text-2xl font-bold mb-2 underline underline-offset-8">{title}</h2>
          <p className="text-lg">
         {description}
          </p>
        </div>
      </div>

    );
}