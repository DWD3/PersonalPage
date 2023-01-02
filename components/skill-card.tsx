import Image, { StaticImageData } from 'next/image'

type Props = {
    imageData : string | StaticImageData;
    items : string[];
    title : string;
}

export default function SkillCard(props : Props){
    function generateItems(){
        return props.items.map(item=>{
            return <>
                <h3 className='py-1' key={item}>{item}</h3>
            </>
        })
    }

    return (
      <>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <div className="flex justify-center">
            <Image
              className="my-5"
              height={180}
              src={props.imageData}
              alt="No image"
            ></Image>
          </div>
          <h1 className="text-xl py-2 font-semibold">{props.title}</h1>
          {generateItems()}
        </div>
      </>
    );
}