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
                <h3 className='py-1'>{item}</h3>
            </>
        })
    }

    return <>
            <div className="text-center shadow-lg p-10 rounded-xl m-10 min-w-[20vw]">
            <div className='flex justify-center'>
             <Image className="my-5" width={120} height={120} src={props.imageData} alt="No image"></Image>
            </div>
            <h1 className="text-xl py-2">{props.title}</h1>
            {generateItems()}
        </div>
    </>
}