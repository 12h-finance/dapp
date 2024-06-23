
#[starknet::interface]
trait IPool<TContractState> {
    fn deposit(ref self: TContractState, amount: u256);
    fn withdraw(ref self: TContractState, amount: u256);
    fn borrow(ref self: TContractState, amount: u256);
    fn repay(ref self: TContractState, amount: u256);
}

#[starknet::contract]
mod Pool {
    use starknet::ContractAddress; 
    #[storage]
    struct Storage {
        allowances: LegacyMap::<(ContractAddress, ContractAddress), u256>
   }

    #[constructor]
    fn constructor(ref self: ContractState) {}
}
