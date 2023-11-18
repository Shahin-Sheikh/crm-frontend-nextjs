import { Button } from "@mui/material";
import { Router } from "next/router";

function HomePage() {
  return (
    <div className="flex flex-row p-6 rounded-lg">
      <div className="bg-blue-700 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          voluptatem tenetur! Voluptatibus adipisci praesentium delectus!
          Perferendis veniam quam consectetur, voluptatibus magni voluptate
          molestiae reprehenderit! Neque aliquam esse quis fugit cupiditate?
        </p>
        <Button href="/auth/signin">SignIn</Button>
      </div>
      <div className="bg-white">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi atque
          esse id sapiente provident error ad repellendus, dignissimos
          praesentium labore voluptas asperiores fuga vel eligendi! Beatae
          officiis aut deleniti asperiores!
        </p>
        <Button href="/auth/signup">SignUp</Button>
      </div>
    </div>
  );
}

export default HomePage;
