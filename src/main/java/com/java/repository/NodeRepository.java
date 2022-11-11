package com.java.repository;

import com.java.domain.Node;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data  repository for the Node entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NodeRepository extends JpaRepository<Node, Long> {

    List<Node> findAllByParent(String parent);

    List<Node> findAllByName(String name);
}
