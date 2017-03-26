/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var Vercodestat = WL.Server.createSQLStatement("select * from VISHALKUMAR.Vercode where phono=? and ver=?");
function Verification(phoneno,ver) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : Vercodestat,
		parameters : [phoneno,ver]
	});
}

var logstat = WL.Server.createSQLStatement("select * from VISHALKUMAR.Employee1 where email=? and passsword=?");
function login(uname,pass) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : logstat,
		parameters : [uname,pass]
	});
}

var logstat1 = WL.Server.createSQLStatement("insert into VISHALKUMAR.vercode value (?,?,?)");
function hello(uname) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : logstat1,
		parameters : [uname,"sdfs","sdf"]
	});
}




/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */

var Registerstat = WL.Server.createSQLStatement("insert into VISHALKUMAR.Employee1(name,email,cno,qual,exp,passsword) values (?,?,?,?,?,?)");
function Register(uname,qual,exp,pass,email,cno) {
	
	return WL.Server.invokeSQLStatement({
		preparedStatement : Registerstat,
		parameters : [uname,email,cno,qual,exp,pass]
	});
}


function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}

