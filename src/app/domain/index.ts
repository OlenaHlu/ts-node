import Person from "./person/Person";

const controllers = <Controller[]>[Person];

export { controllers };

type Controller = typeof Person;
