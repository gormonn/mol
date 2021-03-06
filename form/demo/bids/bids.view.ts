namespace $.$$ {
	export class $mol_form_demo_bids extends $.$mol_form_demo_bids {
		
		name_first( next? : string ) {
			return $mol_state_local.value( this.state_key( 'name_first' ) , next ) || ''
		}
		
		name_first_bid() {

			const value = this.name_first()

			if( !value ) return this.message_required()
			if( value.indexOf( ' ' ) !== -1 ) return this.message_no_spaces()

		}
		
		name_nick( next? : string ) {
			return $mol_state_local.value( this.state_key( 'name_nick' ) , next ) || ''
		}
		
		name_second( next? : string ) {
			return $mol_state_local.value( this.state_key( 'name_second' ) , next ) || ''
		}
		
		name_second_bid() {
			
			const value = this.name_second()
			
			if( !value ) return this.message_required()
			if( value.indexOf( ' ' ) !== -1 ) return this.message_no_spaces()
			if( value.length < 3 ) return this.message_need_more_letters().replace( '{count}' , '3' )

		}

		sex( next? : string ) {
			return $mol_state_local.value( this.state_key( 'sex' ) , next ) || ''
		}

		sex_bid() {
			if( !this.sex() ) return this.message_required()
			return ''
		}

		submit( next? : Event ) {
			this.message( `Hello, ${this.sex()} ${this.name_first()} (${this.name_nick()}) ${this.name_second()}!` )
		}
		
		submit_blocked() {
			return this.Form().submit_blocked()
		}

	}
}
