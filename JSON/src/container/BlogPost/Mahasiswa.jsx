import React, { Component } from "react";
import PostM from "../../component/PostM";
import "./BlogPost.css";

export default class Mahasiswa extends Component {
  state = {
    listMahasiswa: [],
    insertAplikasi: {
      id: 1,
      NIM: 0,
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: ""
    }
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  ambilDataDariServerAPI() {
    fetch("http://localhost:3001/mahasiswa")
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          listMahasiswa: jsonHasilAmbilDariAPI
        });
      });
  }

  handleHapusMahasiswa = data => {
    fetch(`http://localhost:3001/mahasiswa/${data}`, { method: "DELETE" }).then(
      res => {
        this.ambilDataDariServerAPI();
      }
    );
  };

  handleTambahMahasiswa = event => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa
    });
  };

  handleTombolSimpan = () => {
    fetch(`http://localhost:3001/mahasiswa`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.insertMahasiswa)
    }).then(Response => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-mahasiswa">
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="NIM" className="col-sm-2 col-form-label">
              NIM
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="NIM"
                name="NIM"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="alamat"
                name="alamat"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="hp" className="col-sm-2 col-form-label">
              Hp
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="hp"
                name="hp"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              Angkatan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="angkatan"
                name="angkatan"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="status" className="col-sm-2 col-form-label">
              Status
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="status"
                name="status"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2 style={{ margin: "15px 5px" }}>Daftar Mahasiswa</h2>
        {this.state.listMahasiswa.map(mahasiswa => {
          return (
            <PostM
              key={mahasiswa.id}
              nama={mahasiswa.nama}
              alamat={mahasiswa.alamat}
              hp={mahasiswa.hp}
              angkatan={mahasiswa.angkatan}
              status={mahasiswa.status}
              nim={mahasiswa.NIM}
              idMahasiswa={mahasiswa.id}
              hapusMahasiswa={this.handleHapusMahasiswa}
            />
          );
        })}
      </div>
    );
  }
}
