import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function School(props) {
  const {
    regija,
    obcina,
    naziv,
    naslov,
    postna_stevilka,
    posta,
    email,
    web,
    ds,
    trr,
  } = props.data;
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
        <Dialog>
          <DialogTrigger>
            <Button>Več informacij</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Več informacij o šoli </DialogTitle>
              <DialogDescription>
                <p>davčna številka: {ds}</p>
                <p>
                  spletna stran: <a href={web}>{web}</a>
                </p>
                <p>bančni račun: {trr}</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
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
