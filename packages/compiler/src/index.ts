import Parser, {Doc} from './parser';

export function interpret(source :string): Doc {
  const parser = new Parser();
  return parser.parse(source);
}


// FOR TESTING
function exec() {
  const parser = new Parser();

  const program = `
    describe interface "Sign Up" as { "hello" }
    describe component "What's Up" as { "fren" }
  `;

  const prog = parser.parse(program);
  console.log(JSON.stringify(prog, null, 2));
}

// manual text
exec();
