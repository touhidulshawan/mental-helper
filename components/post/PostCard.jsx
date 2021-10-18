import Image from "next/image";

const PostCard = () => {
  return (
    <div>
      <div>
        {/* profile image of user */}
        <Image
          alt="User profile image"
          src="/images/undraw_biking_kc4f.svg"
          width="45"
          height="45"
        />
        <div>
          <h5>John Smith</h5>
          <small>Posted on: 18-10-2021</small>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          minus suscipit eos ipsa inventore hic rerum cumque corporis numquam
          voluptatum?
        </p>
      </div>
    </div>
  );
};

export default PostCard;
