import { Job, JobContentSchema } from '.';
import { Command } from '../Commands/Command';
import { AbstractExecutor } from '../Executor/Executor';
import { CustomParametersList, CustomParametersSchema } from '../Parameters';
import { ParameterizedJobParameterLiteral } from '../Parameters/Parameters.types';
/**
 * Parameterized are a type of Job which defines parameters it can accept.
 */
class ParameterizedJob extends Job {
  parameters: CustomParametersList<ParameterizedJobParameterLiteral>;

  constructor(
    name: string,
    executor: AbstractExecutor,
    parameters: CustomParametersList<ParameterizedJobParameterLiteral>,
    steps?: Command[],
  ) {
    super(name, executor, steps);
    this.parameters = parameters;
  }

  generateJobContents(): ParameterizedJobContents {
    return {
      parameters: this.parameters.generate(),
      ...super.generateJobContents(),
    };
  }
}

export type ParameterizedJobContents = JobContentSchema & {
  parameters: CustomParametersSchema;
};

export { ParameterizedJob };