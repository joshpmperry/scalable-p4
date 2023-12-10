package com.p4.saga.payment.repository;

import com.p4.saga.payment.entity.UserTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTransactionRepository extends JpaRepository<UserTransaction,Integer> {
}
