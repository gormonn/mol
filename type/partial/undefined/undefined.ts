namespace $ {

	/**
	 * Fields that can be set to undefined makes optional
	 * 
	 * 	type User = $mol_type_partial_undefined<{ name : string , age : number | undefined }> // { name : string , age? : number | undefined }
	 */
	export type $mol_type_partial_undefined< Val > = $mol_type_merge<
		Partial< Val >
		&
		$mol_type_pick< Val , undefined , unknown >
	>

}
