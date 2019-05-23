import Specification from './Specification';

export default class AllMatch<T> implements Specification<T> {
    private readonly _specifications: Array<Specification<T>>;

    constructor(...specifications: Array<Specification<T>>) {
        this._specifications = specifications;
    }

    public isSatisfiedBy(candidate: T): boolean {
        return this._specifications.reduce((carry, spec) => carry && spec.isSatisfiedBy(candidate), true);
    }

    public and(specification: Specification<T>): Specification<T> {
        return new AllMatch(this, specification);
    }
}
