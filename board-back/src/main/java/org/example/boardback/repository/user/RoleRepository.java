package org.example.boardback.repository.user;

import org.example.boardback.common.enums.RoleType;
import org.example.boardback.entity.user.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, RoleType> {
}
