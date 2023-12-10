package com.p4.saga.payment.repository;

import com.p4.saga.payment.entity.UserBalance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBalanceRepository extends JpaRepository<UserBalance,Integer> {
}
