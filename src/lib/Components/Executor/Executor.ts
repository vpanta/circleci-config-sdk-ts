import Component from '../index';
import { ExecutorSchema } from './Executor.types';

/**
 * A generic reusable Executor
 */
export default abstract class Executor extends Component {
  name: string;
  description?: string;
  resourceClass: string;
  constructor(name: string, resourceClass: string, description?: string) {
    super();
    this.name = name;
    this.description = description;
    this.resourceClass = resourceClass;
  }
  abstract generate(): ExecutorSchema;
}