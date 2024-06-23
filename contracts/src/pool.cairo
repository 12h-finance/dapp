#[starknet::contract]
mod Pool {
    use openzeppelin::token::erc20::interface::{ERC20ABIDispatcher, ERC20ABIDispatcherTrait};
    use starknet::{ContractAddress, get_caller_address, get_contract_address, contract_address_const};


    #[storage]
    struct Storage {
	usdcBalances: LegacyMap::<ContractAddress, u256>,
	debtBalances: LegacyMap::<ContractAddress, u256>
    }

    #[constructor]
    fn constructor(ref self: ContractState) {
    }

    #[external(v0)]
    fn deposit(ref self: ContractState, amount: u256) {
	let sender = get_caller_address();
	let usdcDis = ERC20ABIDispatcher {
                contract_address: contract_address_const::<
			0x021eb62dcc6c99a30290ec9e234eb17ada1f1029c454dfee7bbbc127c67be6da
                >() 
            };
	let receiver = get_contract_address();
	usdcDis.transfer_from(sender, receiver, amount); 
	let balance = self.usdcBalances.read(sender);
	self.usdcBalances.write(sender, balance + amount);
    }

    #[external(v0)]
    fn borrow(ref self: ContractState, amount: u256) {
	let sender = get_caller_address();
	let usdcDis = ERC20ABIDispatcher {
                contract_address: contract_address_const::<
			0x021eb62dcc6c99a30290ec9e234eb17ada1f1029c454dfee7bbbc127c67be6da
                >() 
            };
	let deptDis = ERC20ABIDispatcher {
                contract_address: contract_address_const::<
			0x021eb62dcc6c99a30290ec9e234eb17ada1f1029c454dfee7bbbc127c67be6da
                >() 
            };
	
	let price = 5478; 
	let deptAmount = amount / price; 
	let receiver = get_contract_address();
	deptDis.transfer_from(sender, receiver, deptAmount);
    }

    #[external(v0)]
fn repay(ref self: ContractState, amount: u256) {
    let sender = get_caller_address();
    
    // Define dispatchers for USDC and debt tokens
    let usdcDis = ERC20ABIDispatcher {
        contract_address: contract_address_const::<
            0x021eb62dcc6c99a30290ec9e234eb17ada1f1029c454dfee7bbbc127c67be6da
        >()
    };
    let deptDis = ERC20ABIDispatcher {
        contract_address: contract_address_const::<
            0x021eb62dcc6c99a30290ec9e234eb17ada1f1029c454dfee7bbbc127c67be6da
        >()
    };

    // Calculate the amount of debt tokens to be repaid
    let price = 5478;
    let deptAmount = amount / price;

    // Transfer the USDC repayment amount from the sender to the contract
    let contract_address = get_contract_address();
    usdcDis.transfer_from(sender, contract_address, amount);

    // Adjust the sender's debt balance
    let debt_balance = self.debtBalances.read(sender);
    self.debtBalances.write(sender, debt_balance - deptAmount);

    // Transfer the equivalent amount of debt tokens back to the sender
    deptDis.transfer_from(contract_address, sender, deptAmount);
}

}
