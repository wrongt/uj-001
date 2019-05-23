package com.unifun.voice.orm;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name="test_table")

@NamedQuery(name="testtable.getAll",query="select t from TestTable t")
public class TestTable {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
int id;
@Column(name="text")
String name;

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

}
