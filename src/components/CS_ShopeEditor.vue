<template>
    <div class="row">
        <div class="col">
            <form>
                <!-- width,height -->
                <div class="input">
                    <p></p>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inp_width">width</label>
                            <input type="number" class="form-control" id="inp_width"
                                @input="$emit('change-Objwidth', $event)">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inp_height">height</label>
                            <input type="number" class="form-control" id="inp_height"
                                @input="$emit('change-ObjHeight', $event)">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inp_color">color</label>
                            <input type="color" class="form-control" id="inp_color" />
                        </div>
                    </div>
                </div>
                <!-- border -- width,color -->
                <div class="input">
                    <p>Border</p>
                    <div class="form-row ">
                        <div class="form-group col-md-3">
                            <label for="inp_borderW">width</label>
                            <input type="number" class="form-control" id="inp_borderW"
                            @input="$emit('change-ObjborderW', $event)">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inp_borderC">color</label>
                            <input type="color" class="form-control" id="inp_borderC">
                        </div>
                    </div>
                </div>

                <!-- position -- X / Y , zoom -->
                <div class="input">
                    <p>position</p>
                    <div class="form-row ">
                        <div class="form-group col-md-3">
                            <label for="inp_position_x">x</label>
                            <input type="number" class="form-control" id="inp_position_x">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inp_position_y">y</label>
                            <input type="number" class="form-control" id="inp_position_y">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inp_zoom">zoom</label>
                            <input type="number" class="form-control" id="inp_zoom">
                        </div>
                    </div>
                </div>

                <!-- text --  -->
                <div class="input">
                    <p>text</p>
                    <div class="form-row ">
                        <!-- font size -->
                        <div class="form-group col-md-3">
                            <label for="inp_position_x">font size</label>
                            <select>
                                <option>
                                    example
                                </option>
                            </select>
                        </div>
                        <!-- font family -->
                        <div class="form-group col-md-3">
                            <label for="inp_position_y">font family</label>
                            <select id="font-family">
                                <option value="arial">Arial</option>
                                <option value="helvetica" selected>
                                    Helvetica
                                </option>
                                <option value="myriad pro">
                                    Myriad Pro
                                </option>
                                <option value="delicious">
                                    Delicious
                                </option>
                                <option value="verdana">
                                    Verdana
                                </option>
                                <option value="georgia">
                                    Georgia
                                </option>
                                <option value="courier">
                                    Courier
                                </option>
                                <option value="comic sans ms">
                                    Comic Sans MS
                                </option>
                                <option value="impact">
                                    Impact
                                </option>
                                <option value="monaco">
                                    Monaco
                                </option>
                                <option value="optima">
                                    Optima
                                </option>
                                <option value="hoefler text">
                                    Hoefler Text
                                </option>
                                <option value="plaster">
                                    Plaster
                                </option>
                                <option value="engagement">
                                    Engagement
                                </option>
                            </select>
                        </div>
                        <!-- font Weight -->
                        <div class="form-group col-md-3">
                            <label for="inp_font_weight">font Weight</label>
                            <select>
                                <option>
                                    example
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- line -- X / Y , zoom -->
                <div class="input">
                    <p>Coord Point</p>
                    <div class="form-row ">
                        <div class="form-group col-md-3">

                            <table class="table table-sm table-dark">
                                <thead>
                                    <tr>
                                        <!-- <th scope="col">#</th> -->
                                        <th scope="col">X</th>
                                        <th scope="col">Y</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="number" class="
                                                                form-control
                                                                input
                                                            " aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" />
                                        </td>
                                        <td>
                                            <input type="number" class="form-control
                                                                input
                                                            " aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div id="coordPointBox">
                                <span><button>Add</button></span>
                                <span><button>Update</button></span>
                                <span><button>Delete</button></span>
                            </div>
                         
                        </div>


                    </div>
                </div>


            </form>
        </div>

        <!-- <div class="col-4">

        </div> -->

    </div>







</template>

<script>

export default {
    name: "csShopeEditor",
    props: {
        msg: String
    },
    data() {
        return {

        };
    },
};
</script>

<style scoped>

.input {

    border: 1px solid black;
}
#coordPointBox{
    display: flex;  
}
#coordPointBox button{
     width: 50px;
    height: 30px;
    font-size: 10px;
    margin: 2px;
    border-radius: 5px;
    background-color: #007bff;
    color: white; 
}
</style>