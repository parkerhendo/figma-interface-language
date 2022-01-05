import Parser from '../src/Parser';

describe('Parser testing suite', () => {
  it('(single statement) should parse `program` to match `result`', () => {
    const parser = new Parser();
    const program = `
    describe interface "Sign Up" as { "hello" }
  `;

    const result = JSON.parse(`
    {
      "type": "Document",
      "body": [
        {
          "type": "TOKEN_DESCRIBE",
          "descriptor": "TOKEN_INTERFACE",
          "params": {
            "name": "Sign Up"
          },
          "body": "hello"
        }
      ]
    }
  `);

    const prog = parser.parse(program);

    expect(prog.type).toBe(result.type);

    expect(prog.body[0]!.type).toBe(result.body[0]!.type);
    expect(prog.body[0]!.descriptor).toBe(result.body[0]!.descriptor);
    expect(prog.body[0]!.params!.name).toBe(result.body[0]!.params!.name);
    expect(prog.body[0]!.body).toBe(result.body[0]!.body);
  });


  it('(multi statement) should parse `program` to match `result`', () => {
    const parser = new Parser();
    const program = `
    describe interface "Sign Up" as { "hello" }
    describe interface "Sign Up" as { "hello" }
    describe interface "Sign Up" as { "hello" }
  `;

    const result = JSON.parse(`
    {
      "type": "Document",
      "body": [
        {
          "type": "TOKEN_DESCRIBE",
          "descriptor": "TOKEN_INTERFACE",
          "params": {
            "name": "Sign Up"
          },
          "body": "hello"
        },
        {
          "type": "TOKEN_DESCRIBE",
          "descriptor": "TOKEN_INTERFACE",
          "params": {
            "name": "Sign Up"
          },
          "body": "hello"
        },
        {
          "type": "TOKEN_DESCRIBE",
          "descriptor": "TOKEN_INTERFACE",
          "params": {
            "name": "Sign Up"
          },
          "body": "hello"
        }
      ]
    }
  `);

    const prog = parser.parse(program);

    expect(prog.type).toBe(result.type);
    expect(prog.body[0]!.type).toBe(result.body[0]!.type);
    expect(prog.body[0]!.descriptor).toBe(result.body[0]!.descriptor);
    expect(prog.body[0]!.params!.name).toBe(result.body[0]!.params!.name);
    expect(prog.body[0]!.body).toBe(result.body[0]!.body);

    expect(prog.body[1]!.type).toBe(result.body[1]!.type);
    expect(prog.body[1]!.descriptor).toBe(result.body[1]!.descriptor);
    expect(prog.body[1]!.params!.name).toBe(result.body[1]!.params!.name);
    expect(prog.body[1]!.body).toBe(result.body[1]!.body);

    expect(prog.body[2]!.type).toBe(result.body[2]!.type);
    expect(prog.body[2]!.descriptor).toBe(result.body[2]!.descriptor);
    expect(prog.body[2]!.params!.name).toBe(result.body[2]!.params!.name);
    expect(prog.body[2]!.body).toBe(result.body[2]!.body);
  });
});
