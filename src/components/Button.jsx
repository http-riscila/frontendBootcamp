import { Button } from "flowbite-react";

export function ButtonComponent() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="alternative">Alternative</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="green">Green</Button>
      <Button color="red">Red</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="purple">Purple</Button>
      <Button outline>Default</Button>
      <Button color="dark" outline>
        Dark
      </Button>
      <Button color="green" outline>
        Green
      </Button>
      <Button color="red" outline>
        Red
      </Button>
      <Button color="yellow" outline>
        Yellow
      </Button>
      <Button color="purple" outline>
        Purple
      </Button>
    </div>
  );
}
