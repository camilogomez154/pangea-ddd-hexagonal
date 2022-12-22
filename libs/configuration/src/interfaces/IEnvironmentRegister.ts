export interface IEnvironmentRegister<T> {

    register(): () => T;

}