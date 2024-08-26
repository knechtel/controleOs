package com.dular.demo.DTO;
import com.dular.demo.domain.Equipment;
/**
 * Created by maiquelknechtel on 12/07/24.
 */
public class EquipmentDto {

    private Integer id;
    private String brand;
    private String model;
    private String serial;
    private Double costValue;
    private String defectForRepair;
    private Integer idClient;
    private Boolean pronto;
    private Boolean autorizado;
    private String entregue;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSerial() {
        return serial;
    }

    public void setSerial(String serial) {
        this.serial = serial;
    }

    public Double getCostValue() {
        return costValue;
    }

    public void setCostValue(Double costValue) {
        this.costValue = costValue;
    }

    public String getDefectForRepair() {
        return defectForRepair;
    }

    public void setDefectForRepair(String defectForRepair) {
        this.defectForRepair = defectForRepair;
    }

    public Equipment toBuild(EquipmentDto equipmentDto) {
        Equipment entity = new Equipment();
        if (equipmentDto.getId() != null)
            entity.setId(equipmentDto.getId());

        entity.setModel(model);
        entity.setSerial(serial);



        return entity;
    }

    public Equipment toBuildUpdate(EquipmentDto equipmentDto) {
        Equipment entity = new Equipment();
        entity.setId(id);
        if (brand != null) {

        }
        if (model != null) {

        }
        if (serial != null) {

        }
        if (costValue != null) {

        }
        if (defectForRepair != null) {

        }
        if (pronto != null) {
            System.out.println("toBuild");
            System.out.println(pronto);

        }
        if (autorizado != null) {

        }
        return entity;
    }

    public Integer getIdClient() {
        return idClient;
    }

    public void setIdClient(Integer idClient) {
        this.idClient = idClient;
    }

    public boolean isPronto() {
        return pronto;
    }

    public void setPronto(boolean pronto) {
        this.pronto = pronto;
    }

    public boolean isAutorizado() {
        return autorizado;
    }

    public void setAutorizado(boolean autorizado) {
        this.autorizado = autorizado;
    }

    public String getEntregue() {
        return entregue;
    }

    public void setEntregue(String entregue) {
        this.entregue = entregue;
    }
}

