package com.dular.demo.service;
import com.dular.demo.domain.Equipment;
import com.dular.demo.repository.EquipmentDao;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by maiquelknechtel on 13/07/24.
 */
@Service
public class EquipmentService {
    @Autowired
    private EquipmentDao equipmentDao;


    public Equipment create(Equipment equipment) {
        return equipmentDao.save(equipment);
    }

    public List<Equipment> findAll() {
        return (List<Equipment>) equipmentDao.findAll();
    }

    public Equipment findById(Integer id) {
        return equipmentDao.findById(id).orElse(null);
    }

    public void update(Equipment equipment) {
        if (equipment.getId() == null) {
            return;
        }
        Equipment equipmentEdit = equipmentDao.findById(equipment.getId()).orElse(null);
//        if (equipment.getBrand() != null)
//            equipmentEdit.setBrand(equipment.getBrand());

        if (equipment.getModel() != null)
            equipmentEdit.setModel(equipment.getModel());

        if (equipment.getSerial() != null)
            equipmentEdit.setSerial(equipment.getSerial());

        if (equipment.getCostValue() != null)
            equipmentEdit.setCostValue(equipment.getCostValue());
//
        if (equipment.getDefectForRepair() != null)
            equipmentEdit.setDefectForRepair(equipment.getDefectForRepair());
//
        if (equipment.isAutorizado())
            equipmentEdit.setAutorizado(equipment.isAutorizado());
        else
            equipmentEdit.setAutorizado(false);
        if (equipment.isPronto())
            equipmentEdit.setPronto(equipment.isPronto());
        else
            equipmentEdit.setPronto(false);
        equipmentDao.save(equipmentEdit);
    }

    public void delete(Equipment equipment) {
        equipmentDao.delete(equipment);
    }


}
