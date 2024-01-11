import esprima from 'esprima';

const GetAST = async (code) => {
  try {
    if (!esprima) {
      throw new Error('esprima module not available.');
    }

    const ast = await esprima.parseScript(code);
    return ast;
  } catch (error) {
    console.error(error);
    return null; // Return null or handle the error appropriately.
  }
};

export default GetAST;