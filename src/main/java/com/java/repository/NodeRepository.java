package com.java.repository;

import com.java.domain.Node;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


/**
 * Spring Data  repository for the Node entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NodeRepository extends JpaRepository<Node, Long> {


    List<Node> findAllByDesignation(String designation);
   // @Query("SELECT a FROM node a WHERE CONCAT(a.designation) LIKE %?1%")
    Optional<Node> findDesignationById(Long id);
}
