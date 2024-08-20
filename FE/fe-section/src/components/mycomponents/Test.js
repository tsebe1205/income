import { useState } from "react";
import { Tag } from "./Tag";

const BackIcon = (
  <svg
    width="9"
    height="17"
    viewBox="0 0 9 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Icon"
      d="M8.5 16L1 8.5L8.5 1"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ForwardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="17"
    viewBox="0 0 9 17"
    fill="none"
  >
    <path
      id="Icon"
      d="M1 1L8.5 8.5L1 16"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const FirstContent = () => {
  let [current, setCurrent] = useState(0);

  const [data, setData] = useState([
    {
      pic: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCLy5GghCAPtYF~~U28~GaAdAp88xIeWT8FSkxHLq4JKnZuK1Ax07wga4n6pArK3wCb0p3KuijpLEmUvLcVvF5JxOkJWk9AU1rXxAtZd4woX~Gpb6eSSvDZZqMcP8h-3zhg9ut2mf4VzWiIiDHKoa9NFXk8w0G04hXxZ2xt~73IMrGSXvFTz~kv0Vk4MPJFtZHNiElyvYHEdlUlU9HVpQZdHPzvhc2XEN6DiTGUzQFh~QgwOE1h-gKcycyMG3CwVSq-PGcJpBzOKf20idyHPjhXZtUuuqxXW56q6b~~6JJETVtLbxz~ERtCcjXI3euAOxRmG8ebg83eq01thZq~zEg__",
      category: "Technologoy",
      title: "Grid system for better Design User Interface",
      date: "August 20, 2022",
    },
    {
      pic: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K24Nzd5zJ1XEOcGTJPxkBNveQUmndhW2SktSLjMo1rPdg-y6sSyfDMRGkalCHYmwdMT3C5~hoo2ioFKLAFXd-bB1v4dX0PwPh89I0r-7xQk1GAI9lDBSY7VcLgv3iZOVLZW7YI9Dua0XMuqUW47gVpcMeJjvpE7sg3doPNrg44W1R3dYjBkeZlJEsNMN7Q23yAngjRM5DAxP8tzVL-m77WMg3uvi9kmMTdUw2WFBbr1UjC5zWKXHEBYBe9oa-NU1QMwvTR94X1L5nztOmunq1zU~1fm18W-XfaHPUbJzP8j~VaHlpZomJ0NYzrFizwh9ByK8Fal~uduwxFQrizyz-Q__",
      category: "Art",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 24, 2024",
    },
    {
      pic: "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7AMmxIgtUH4BYgItpH1tVb1TXBNNupwZ87M-tz3VZOKm0pA5sbflyoq6ugbWOJ~LIbhaePqQw6pedVx4e5oNVGmtmQviVOIz6OplELy4YxX9MfLb5a8KY2LHwJeWN5wqpG3Io2UWL6-w3hq9JlMh8yq9PZfqbzuRPAr~bZa2LkO8ROh0ObE7lRJmprGogpptEJ5~jWSg7e-zyEeA4pCJdP89Do1vX5VYo5ysLH5jH2U4ub9lOHGVKbV5mLWcrsbCzf~Dyx6Gtf4QrcqkQRx6xVTDj4PMnTPz3X~WFCClbOh5i8qJzYNDH3Hxw4gHHYCunwho8loQD2FhxeTQ~EqxQ__",
      category: "Media",
      title: "Grid system for better Design User Interface",
      date: "August 10, 2024",
    },
  ]);

  const Carosel= (tag)=>{
    setData(data)
  }

  const leftClick = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  };

  const rightClick = () => {
    if (current < data.length - 1) {
      setCurrent(current + 1)
    }
  };

  return (
    <div className="max-w-[1216px] min-h-[600px]">
      <div className=" min-w-[1216px] min-h-[600px] relative flex flex-col justify-end bg-[#141624] bg-opacity-40 rounded-xl">
        <img src={data[current].pic} className=" w-[1216px] h-[600px] absolute top-0 left-0 -z-10 rounded-xl bg-cover"/>
        <div className="p-10 border-solid border-[1px] border-[#E8E8EA] max-w-[598px] bg-white rounded-xl ml-[11px] mb-[13px]">
         <Tag tag= {data[current].category}/>
          <p className="text-[36px] font-semibold leading-[40px] text-[#181A2A] pt-4 pb-6">{data[current].title} </p>
          <p className="leading-6 text-[#97989F]">{data[current].date} </p>
        </div>
      </div>
      <div className="flex justify-end gap-[9px] mt-[11px] ">
        <button onClick={leftClick}>{BackIcon}</button>
        <button onClick={rightClick}>{ForwardIcon}</button>
      </div>
    </div>
  );
};