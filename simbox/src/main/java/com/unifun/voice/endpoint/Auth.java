package com.unifun.voice.endpoint;

import java.util.Hashtable;
import java.util.StringJoiner;

import javax.json.bind.JsonbBuilder;
import javax.naming.Context;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import org.apache.commons.codec.binary.Base64;
import org.jboss.logging.Logger;

@Path("/auth")
public class Auth {
	private static final Logger logger = Logger.getLogger(Auth.class);
	private String json_field = "\"%s\":\"%s\"";
	@POST
	public String getPost(String reqBody) {
		
		byte[] decode = Base64.decodeBase64(reqBody);
		reqBody = new String(decode);
		reqBody = reqBody.substring(3);
		int separator = reqBody.indexOf(":");
		String username = reqBody.substring(0,separator);
		String password = reqBody.substring(separator+1);
		System.out.println("usernama decoded: " + username);
		System.out.println("password decoded: " + password);
		logger.info(reqBody);
		//TODO check if user and password is ok 
		try {		
			Hashtable<String, String> env = new Hashtable<String, String>();
			env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
			env.put(Context.PROVIDER_URL,"ldap://localhost:389");
			env.put(Context.SECURITY_AUTHENTICATION, "simple");
			env.put(Context.SECURITY_PRINCIPAL,"cn="+username+",dc=unifun,dc=in");
			env.put(Context.SECURITY_CREDENTIALS,password);
			DirContext ctx = new InitialDirContext(env);
			ctx.close();
			
			StringJoiner sj = new StringJoiner(",","{","}");
			sj.add(String.format(json_field, "status","ok"));
			sj.add(String.format(json_field, "token",username));
			return JsonbBuilder.create().toJson(sj.toString());
		}
		catch(Exception e) {
			StringJoiner sj = new StringJoiner(",","{","}");
			sj.add(String.format(json_field, "status","notok"));
			return JsonbBuilder.create().toJson(sj.toString());
		}
		
		
	}

}
