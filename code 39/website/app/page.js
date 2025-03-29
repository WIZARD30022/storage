import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container my-5">
        <Image className="mx-auto" width={100} height={100} src="https://th.bing.com/th?id=OIP.eB8mcjtMUwEWzetyf5IGvwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
    </div>
    <div className="container my-5 size-80 relative">
      <Image className="mx-auto bg-violet-700" quality={100} fill={true} src="https://th.bing.com/th?id=OIP.eB8mcjtMUwEWzetyf5IGvwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
    </div>
    </div>
    
    
  );
}
