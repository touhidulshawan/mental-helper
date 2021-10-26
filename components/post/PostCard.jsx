import Image from "next/image";

const PostCard = () => {
  return (
    <div className="bg-bluegray-800 w-full justify-self-center shadow-lg border-2 border-bluegray-700 rounded-tr-xl rounded-tl-xl">
      <div>
        <div className="flex items-center gap-5 p-4 border-b-2 border-bluegray-700">
          <div className="border-2 border-bluegray-600  p-1 rounded-full flex justify-center items-center w-14 h-14">
            <Image
              alt="User profile image"
              src="/images/Person.jpg"
              width="50"
              height="50"
              className=" rounded-full "
            />
          </div>
          <div>
            <h5 className="font-righteous text-lg tracking-wider text-bluegray-300">
              Sara Smith
            </h5>
            <small className="text-bluegray-400">Posted on: 18-10-2021</small>
          </div>
        </div>

        <p className="p-5 text-justify text-bluegray-200 leading-7 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          minus suscipit eos ipsa inventore hic rerum cumque corporis numquam
          voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo minus suscipit eos ipsa inventore hic rerum cumque corporis
          numquam voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Explicabo minus suscipit eos ipsa inventore hic rerum cumque
          corporis numquam voluptatum?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo minus suscipit eos ipsa inventore hic
          rerum cumque corporis numquam voluptatum?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo minus suscipit eos ipsa
          inventore hic rerum cumque corporis numquam voluptatum?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Explicabo minus suscipit
          eos ipsa inventore hic rerum cumque corporis numquam voluptatum?
        </p>
      </div>
    </div>
  );
};

export default PostCard;
