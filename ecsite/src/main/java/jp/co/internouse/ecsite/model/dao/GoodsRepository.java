package jp.co.internouse.ecsite.model.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import jp.co.internouse.ecsite.model.entity.Goods;

public interface GoodsRepository extends JpaRepository<Goods, Long> {

}
