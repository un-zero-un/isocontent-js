import Specification from './Specification';
import AllMatch from './AllMatch';

export default abstract class BaseSpecification<T> implements Specification<T> {
    abstract isSatisfiedBy(candidate: T): boolean;

    public and(specification: Specification<T>): Specification<T> {
        return new AllMatch(this, specification);
    }
}
