import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function School(props) {
  const { regija, obcina, naziv, naslov, postna_stevilka, posta, email } =
    props.data;
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{naziv}</CardTitle>
        <CardDescription>{regija}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-bold">Naslov:</span> {naslov}, poštna številka:{" "}
          {postna_stevilka}, {posta}
        </p>
      </CardContent>
      <CardFooter>
        <p>
          <strong>E- poštni naslov: </strong>{" "}
          <a href={`mailto:${email}`}> {email}</a>
        </p>
      </CardFooter>
    </Card>
  );
}
