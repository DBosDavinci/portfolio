import { normalText, subtitle, title } from "@/components/primitives";
import { Card } from "@heroui/card";
import { Spacer } from "@heroui/spacer";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About me</h1>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>Software developer</h2>
        <p className={normalText({ size: "sm" })}>Hi! I'm Daniel, a fourth year software Developer. I specialise in making software that I enjoy and find interest in.</p>
        <Spacer y={6} />

        <h2 className={subtitle()}>Hobbies</h2>
        <p className={normalText({ size: "sm" })}>In my free time, I love to go for some physical activities like running or cycling.</p>
      </Card>
    </div>
  );
}
