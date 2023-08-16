import { genRandomWithinRange } from "@/libs/helpers";

export default function UserImage({ gender, username }: { gender: string, username: string }) {

    const num = genRandomWithinRange(50, 0);

    return <img src={`https://xsgames.co/randomusers/assets/avatars/${gender}/${num}.jpg`} alt={username} style={{ borderRadius: "50%", width: "40px", height: "40px", objectPosition: "center" }} />
}