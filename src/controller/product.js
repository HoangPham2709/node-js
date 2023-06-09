import mongoose from "mongoose";
import express from "express";
import products from "../model/product";

export const create = async (req, res) => {
    try {
        const product = await products.create(req.body);
        return res.status(201).json({
            message: "tao thanh cong",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
};
export const get = async (req, res) => {
    try {
        const product = await products.findById(req.params.id);
        return res.status(201).json({
            message: "tim kiem thanh cong san pham",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const getAll = async (req, res) => {
    try {
        const product = await products.find();
        return res.status(201).json({
            message: "tim kiem thanh cong toan bo san pham",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}
export const update = async (req, res) => {
    try {
        const product = await products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(201).json({
            message: "update thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}
export const remove = async (req, res) => {
    try {
        const product = await products.findByIdAndDelete(req.params.id);
        return res.status(201).json({
            message: "xoa thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}
