export default interface Specification<T> {
    isSatisfiedBy(candidate: T): boolean;

    and(specification: Specification<T>): Specification<T>;
}
