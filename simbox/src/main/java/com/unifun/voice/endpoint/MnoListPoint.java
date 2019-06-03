package com.unifun.voice.endpoint;



import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.json.bind.JsonbBuilder;
import javax.persistence.EntityManager;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import org.jboss.logging.Logger;

import com.unifun.voice.orm.MNOList;


@Path("/MNO")
@ApplicationScoped
@Produces("application/json")
public class MnoListPoint {
	private static final Logger logger = Logger.getLogger(MnoListPoint.class);

	@POST
	public void getPost(String mno_id) {
		logger.info(mno_id);
		System.out.println(mno_id);
		//return mno_id;			
	};
		
	@Inject
	EntityManager em;
	
	@GET
	public String get() {
		return JsonbBuilder.create().toJson(em.createNamedQuery("MNOList.getAll", MNOList.class).getResultList());
	}

}