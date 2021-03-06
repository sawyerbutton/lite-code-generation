import {CodeGenerationConfig, CodeLike, Context} from "./Interface";
import {ContextBuilder} from "./ContextBuilder";


export async function generate(language:CodeGenerationConfig,code:(ctx:(text?: CodeLike) => Context)=> (Promise<void> | void)):Promise<string> {
  const builder = new ContextBuilder(language)
  await code(builder.create())
  return await builder.generateCode()
}